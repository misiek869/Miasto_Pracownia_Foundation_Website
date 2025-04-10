'use client'
import { useState, useTransition } from 'react'
import {useToast} 

const DeleteDialog = ({
	id,
	action,
}: {
	id: string
	action: (id: string) => Promise<{ success: boolean; message: string }>
}) => {
	return
}

export default DeleteDialog
