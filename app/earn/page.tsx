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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AmountForm } from "./amount"
import { WithdrawForm } from "./withdraw"


export default function TabsDemo() {
  return (
    <Tabs defaultValue="Deposit" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Deposit">Deposit</TabsTrigger>
        <TabsTrigger value="withdrawd">withdraw</TabsTrigger>
      </TabsList>
      <TabsContent value="Deposit">
        <Card>
          <CardHeader>
            <CardTitle>Deposit</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when youre done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Chapa</AccordionTrigger>
    <AccordionContent>
   <AmountForm chatId="7277258087"/>


    </AccordionContent>
  </AccordionItem>
</Accordion>
           
          </CardContent>
        
        </Card>
      </TabsContent>

      <TabsContent value="withdraw">
        <Card>
          <CardHeader>
            <CardTitle>withdraw</CardTitle>
            <CardDescription>
            withdraw from your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <WithdrawForm chatId="7277258087"/>
          
          </CardContent>
         
        </Card>
      </TabsContent>
    </Tabs>
  )
}
