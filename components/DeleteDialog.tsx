'use client'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from './ui/alert-dialog'
import { Button } from './ui/button'

const DeleteDialog = ({
	id,
	action,
}: {
	id: string
	action: (id: string) => Promise<{ success: boolean; message: string }>
}) => {
	const [open, setOpen] = useState(false)

	const [isPending, startTransition] = useTransition()

	const handleClick = () => {
		const toastId = toast('Ładowanie...', {
			duration: Infinity, // Toast nie zniknie automatycznie
		})

		setTimeout(() => {
			toast.dismiss(toastId)
			toast('Zaktualizowano!', {
				description: 'Operacja zakończona pomyślnie.',
				action: {
					label: 'OK',
					onClick: () => console.log('Kliknięto OK'),
				},
			})
		}, 2000)
	}

	const handleDelete = () => {
		startTransition(async () => {
			const res = await action(id)

			if (!res.success) {
				return
			} else {
				setOpen(false)
			}
		})
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button size={'sm'} variant={'destructive'}>
					Usuń
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Czy na pewno usunąć warsztat</AlertDialogTitle>
					<AlertDialogDescription>
						Tej decyzji nie można cofnąć
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Wróć</AlertDialogCancel>
					<Button
						variant={'destructive'}
						size={'sm'}
						disabled={isPending}
						onClick={handleDelete}>
						{isPending ? 'Usuwanie...' : 'Usuń'}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default DeleteDialog
