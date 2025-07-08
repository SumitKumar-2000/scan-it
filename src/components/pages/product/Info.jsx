import * as Accordian from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import React from "react";

function Info({product}) {
    return (
        <React.Fragment>
            <div className="space-y-4 px-6 flex flex-col items-center w-full">
                <Button type="button" className="rounded-full pointer-events-none px-10">About Product</Button>
                <Card.Card className="bg-app-tertiary w-full">
                    <Card.CardContent className="text-justify text-sm">
                        {product.description}
                    </Card.CardContent>
                </Card.Card>
            </div>

            <Accordian.Accordion className="w-full px-6" type="single" collapsible>
                <Accordian.AccordionItem value="before_using">
                    <Accordian.AccordionTrigger>Before Using The Kettle</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
                <Accordian.AccordionItem value="user_guide">
                    <Accordian.AccordionTrigger>User Guide</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
                <Accordian.AccordionItem value="safety">
                    <Accordian.AccordionTrigger>Safety and Precautions</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
            </Accordian.Accordion>
        </React.Fragment>
    )
}

export default React.memo(Info)