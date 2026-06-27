// import { Button } from "@workspace/ui/components/button"
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@workspace/ui/components/card"





export default function Photography(): React.JSX.Element {
  // return (
  //   <Card className="relative mx-auto w-full max-w-sm pt-0">
  //     <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
  //     <img
  //       src="https://avatar.vercel.sh/shadcn1"
  //       alt="Event cover"
  //       className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
  //     />
  //     <CardHeader>
  //       <CardAction>
  //       </CardAction>
  //       <CardTitle>Design systems meetup</CardTitle>
  //       <CardDescription>
  //         A practical talk on component APIs, accessibility, and shipping
  //         faster.
  //       </CardDescription>
  //     </CardHeader>
  //     <CardFooter>
  //       <Button className="w-full">View Event</Button>
  //     </CardFooter>
  //   </Card>
  // )
return (
    <div className="relative h-screen w-full">
      <img
        src="images/software/LandingImage.webp"
        alt="Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-5xl font-bold text-white tracking-wide">
          Coming Soon...
        </h1>
      </div>
    </div>
  )
}
