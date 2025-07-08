import { Button } from '@/components/ui/button'
import * as Card from "@/components/ui/card";
import React from 'react'

export const metadata = {
    title: "Use"
}

export default function Use() {
    return (
        <>
            <div className="space-y-4 px-6 flex flex-col items-center mt-6">
                <Button type="button" className="rounded-full pointer-events-none px-10">How To Use</Button>
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
            <div className="space-y-4 px-6 flex flex-col items-center mt-6">
                <Button type="button" className="rounded-full pointer-events-none px-10">Steps before using the Kettle</Button>
                <Card.Card>
                    <Card.CardContent className="text-justify space-y-4">
                        <p>· Remove all packing materials from the outside and inside of the kettle.</p>
                        <p>· Make sure the rated voltage printed on the plate on the kettle is in conformity with local voltage before using.</p>
                        <p>· If an extension lead is required, it must be earthed.</p>
                        <p>· Boil the water in the kettle twice to clean the inside before use and pour out the boiled water.</p>
                        <p>· Use thermoplastic body must connect with base.</p>
                    </Card.CardContent>
                </Card.Card>

            </div>
            <div className="space-y-4 px-6 flex flex-col items-center my-6">
                <Button type="button" className="rounded-full pointer-events-none px-10">CLEAN AND MAINTENANCE</Button>
                <Card.Card>
                    <Card.CardContent className="text-justify space-y-4">
                        <p>· Open the lid, pour in water. Close the lid firmly.</p>
                        <p>· Plug in the base, put the kettle on the base according to the direction of the manual.</p>
                        <p>· If the indicator lights up, the kettle is working. If the indicator does not light up, please push the switch button to power on and the kettle will begin to work with the indicator lighting up. After the water is boiled for a certain period of time, the power supply will be automatically cut off and the indicator will go off.</p>
                        <p>· If you want to cut off power before the water is boiled, remove the kettle off the base or unplug the power cord.</p>
                        <p><strong>Caution:</strong> Do not fill the kettle with water above the maximum water level mark. If you do, hot water will overflow. Do not fill the kettle with water below the minimum water level mark. If you do, the kettle will not operate normally.</p>
                    </Card.CardContent>
                </Card.Card>
            </div>
        </>
    )
}
