"use client"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { contactFormSchema } from "@/lib/schema"
import type { ContactFormSchemaType } from "@/lib/schema"

export default function ContactForm({ children }: { children: ReactNode }) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [open, setOpen] = useState(false)

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const utm_source = urlParams.get("utm_source") || "website"
    const utm_campaign = urlParams.get("utm_campaign") || ""

    setValue("utm_source", utm_source)
    setValue("utm_campaign", utm_campaign)
  }, [setValue])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files)
    if (files.length + newFiles.length > 5) {
      alert("You can upload up to 5 files only")
      return
    }
    setFiles((prev) => [...prev, ...newFiles])
    e.target.value = ""
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: ContactFormSchemaType) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("bname", data.bname)
    formData.append("phone", data.phone)
    formData.append("email", data.email)
    formData.append("message", data.message)
    formData.append("utm_source", data.utm_source || "website")
    formData.append("utm_campaign", data.utm_campaign || "default")
    files.forEach((file) => formData.append("attachment[]", file))

    try {
      const res = await fetch("/submit.php", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        console.log("email sent")
        setOpen(false)
      } else {
        alert("Failed to send.")
      }
    } catch (error) {
      alert("Something went wrong!")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="z-9999 max-h-[90vh] overflow-y-auto px-8 py-8 sm:max-w-2xl">
        <form
          className="space-y-5"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogHeader>
            <DialogTitle>Send an enquiry or get a quote</DialogTitle>
            <DialogDescription>Enter your details.</DialogDescription>
          </DialogHeader>

          <Input
            type="hidden"
            {...register("utm_source")}
            name="utm_source"
            id="utm_source"
          />
          <Input
            type="hidden"
            {...register("utm_campaign")}
            name="utm_campaign"
            id="utm_campaign"
          />

          <div className="w-full space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bname">Business Name *</Label>
            <Input
              type="text"
              id="bname"
              {...register("bname")}
              placeholder="Enter business name"
            />
            {errors.bname && (
              <p className="text-sm text-red-600">{errors.bname.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number *</Label>
            <Input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Enter contact"
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Please enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Please enter your message"
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment">Upload Files</Label>
            <Input
              multiple
              type="file"
              ref={inputRef}
              id="attachment"
              className="hidden"
              onChange={onFileChange}
            />

            <div
              onClick={() => inputRef.current?.click()}
              className="cursor-pointer rounded-md border border-gray-300 p-2"
            >
              {files.length > 0 ? (
                <ul className="flex flex-wrap items-center gap-2 text-sm">
                  {files.map((file, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between rounded bg-gray-100 px-2"
                    >
                      <span className="max-w-22.5 truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          removeFile(i)
                        }}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-sm font-light text-gray-400">
                  Click here or drop files to upload
                </p>
              )}
            </div>
            {errors.files && (
              <p className="text-sm text-red-600">{errors.files.message}</p>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={() => reset()} variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-[#AF1E2D]">
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
