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
import { ModeToggle } from "./mode-toggle"

export function CardWithForm() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Data Collector</CardTitle>
				<CardDescription>Collecting your data since 2001</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Your Name" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="district">District</Label>
							<Input id="district" placeholder="District" />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<ModeToggle />
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	)
}
