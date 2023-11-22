"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body>{children}</body>
      </Provider>
    </html>
  )
}