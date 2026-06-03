"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { PowerSystemView } from "./power-system-view"

export function PowerSystemPageClient() {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.push("/")
  }, [router])

  return <PowerSystemView onBack={handleBack} />
}
