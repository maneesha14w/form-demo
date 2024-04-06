import * as React from "react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface CardWithFormProps {
	setDistrict: (district: string) => void
	setName: (name: string) => void
}

export function CardWithForm({ setDistrict, setName }: CardWithFormProps) {
	const [formName, setFormName] = useState("")
	const [formDistrict, setFormDistrict] = useState("")

	function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setName(formName)
		setDistrict(formDistrict)
	}

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Data Collector</CardTitle>
				<CardDescription>Collecting your data since 2001</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-8">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								value={formName}
								onChange={(e) => setFormName(e.target.value)}
								placeholder="Your Name"
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="district">District</Label>
							<Input
								id="district"
								value={formDistrict}
								onChange={(e) => setFormDistrict(e.target.value)}
								placeholder="District"
							/>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button onClick={(e) => onSubmit(e)}>Submit</Button>
			</CardFooter>
		</Card>
	)
}
