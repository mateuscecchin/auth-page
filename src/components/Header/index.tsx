import { Button } from "flowbite-react";
export function Header() {
    return (
        <header>
            <div className="flex w-full h-20 bg-black items-center">
                <Button.Group>
                    <Button color="gray">
                        Profile
                    </Button>
                    <Button color="gray">
                        Settings
                    </Button>
                    <Button color="gray">
                        Messages
                    </Button>
                </Button.Group>
            </div>
        </header>
    )
}