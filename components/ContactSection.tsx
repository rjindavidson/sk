"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactSectionProps {
  email: string
  phone: string
  fax?: string
  location: string
  onSubmit?: (data: {
    name: string
    phone: string
    email: string
    message: string
  }) => void
}

export default function ContactSection({
  email,
  phone,
  fax,
  location,
  onSubmit,
}: ContactSectionProps) {
  const startTimeRef = React.useRef(Date.now())
  const [honeypot, setHoneypot] = React.useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // 🛡️ Bot protection
    const elapsed = Date.now() - startTimeRef.current
    if (honeypot !== "" || elapsed < 3000) {
      // silently fail
      return
    }

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }

    onSubmit?.(payload)
    e.currentTarget.reset()
  }

  return (
    <section className="w-full py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Contact Information</h2>

          <div className="space-y-3 text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Email:</span> {email}
            </p>
            <p>
              <span className="font-medium text-foreground">Phone:</span> {phone}
            </p>
            {fax && (
              <p>
                <span className="font-medium text-foreground">Fax:</span> {fax}
              </p>
            )}
            <p>
              <span className="font-medium text-foreground">Location:</span> {location}
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
          </div>

          <Button type="submit" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
