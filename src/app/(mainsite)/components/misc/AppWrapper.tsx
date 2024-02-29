"use client"

import { ReactNode } from "react"
import AppProvider from "./appContext"

export default function AppWrapper(props: {elems: ReactNode}) {
  return (
    <AppProvider>
        {props.elems}
    </AppProvider>
  )
}
