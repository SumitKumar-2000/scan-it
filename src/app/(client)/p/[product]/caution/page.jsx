import { Button } from '@/components/ui/button'
import * as Card from "@/components/ui/card";
import React from 'react'

export const metadata = {
    title: "Caution"
}

export default function Caution() {
    return (
        <>
            <div className="space-y-4 px-6 flex flex-col items-center mt-6">
                <Button type="button" className="rounded-full pointer-events-none px-10">Precaution</Button>
                <Card.Card>
                    <Card.CardContent className="text-justify space-y-4">
                        <p>· Keep the child away from the kettle when it is boiling.</p>
                        <p>· Never use the kettle without the lid on.</p>
                        <p>· This appliance should not be left unattended during use.</p>
                        <p>· Do not touch the exterior as it gets hot or allow your hand to come in contact with hot steam from the spout or lid, particularly when refilling.</p>
                        <p>· To avoid the kettle overheating and lamp flashing, do not connect the power and press the switch button when the water is not pouring into the kettle.</p>
                        <p>· The unit is for boiling water only. Do not use it to heat other liquids to avoid damage.</p>
                        <p>· If the electrical source wire is broken, it should be replaced by the service department or a qualified repair person in order to keep safe.</p>
                        <p>· Never operate the appliance empty, in the event of this case occurred.</p>
                        <p>· Children should be supervised to ensure that they do not play with the appliance.</p>
                        <p>· Never immerse this appliance in water or other liquids. Use a damp cloth to clean the surface of the appliance. Do not use aggressive cleaners or scourers.</p>
                    </Card.CardContent>
                </Card.Card>

            </div>
            <div className="space-y-4 px-6 flex flex-col items-center my-6">
                <Button type="button" className="rounded-full pointer-events-none px-10">Saftey and Precaution</Button>
                <Card.Card>
                    <Card.CardContent className="text-justify space-y-4">
                        <p>· This appliance is not intended for use by persons (including children) with reduced physical, sensory or mental capabilities, or lack of experience and knowledge, unless they have been given supervision or instruction concerning use of the appliances by a person responsible for their safety.</p>
                        <p>· Children should be supervised to ensure that they do not play with the appliance.</p>
                        <p>· Do not place the kettle on or near slippery or hot surfaces.</p>
                        <p>· The kettle must be used on rated voltage.</p>
                        <p>· Do not fill it above the maximum level or below the minimum level.</p>
                        <p>· Do not use the kettle without water.</p>
                        <p>· Never lift the lid when the kettle is in function.</p>
                        <p>· When using the kettle for the first 2-3 times, throw away the water because it may not be very clean.</p>
                        <p>· When the kettle is not in use, ensure that the power is off.</p>
                    </Card.CardContent>
                </Card.Card>

            </div>
        </>
    )
}
