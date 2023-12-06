"use client"
import axios from 'axios'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    let data;
    const token = request.cookies.get('auth_cookies')
    if (!token) {
      return NextResponse.redirect(new URL('/Login', request.url))
    }
      const response = await fetch('http://localhost:3000/api/Auth/Check',{
        headers:{
          token:token.value
        }
      });
      
      if (response.ok) {
         data = await response.json();
      }
    
      
      // @ts-ignore
      if (!data.isAuthorized) {
        return NextResponse.redirect(new URL('/Login', request.url))
      }
      
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/Login', request.url))
  }
}

export const config = {
  matcher: '/formManga'
}