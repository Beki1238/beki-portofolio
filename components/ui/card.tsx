import * as React from "react"
import styles from './Card.module.css'

interface CardProps extends React.ComponentProps<"div"> {
  className?: string
}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={`${styles.card} ${className || ''}`}
      {...props}
    />
  )
}

interface CardHeaderProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={`${styles.cardHeader} ${className || ''}`}
      {...props}
    />
  )
}

interface CardTitleProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={`${styles.cardTitle} ${className || ''}`}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={`${styles.cardDescription} ${className || ''}`}
      {...props}
    />
  )
}

interface CardActionProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={`${styles.cardAction} ${className || ''}`}
      {...props}
    />
  )
}

interface CardContentProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={`${styles.cardContent} ${className || ''}`}
      {...props}
    />
  )
}

interface CardFooterProps extends React.ComponentProps<"div"> {
  className?: string
}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={`${styles.cardFooter} ${className || ''}`}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}