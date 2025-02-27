import { Heading, Paragraph, SectionWithContainer } from '@/components'
import React from 'react'

const page = () => {
    return (
        <main className="margin">
            <SectionWithContainer sectionClassName="bg-primary">
                <div className="flex flex-col items-center justify-center gap-4 pb-8">
                    <Heading
                        level={2}
                        className="text-center text-secondary capitalize font-montaga heading2"
                    >
                        Cancellation & Refund Policies

                    </Heading>
                    <Paragraph className="text-center description1">
                        The guest can cancel free of charge until 14 days before arrival. The guest will be charged the total price of the reservation if they cancel within 14 days of arrival. If the guest doesn't show up, they'll be charged the total price of the reservation.


                    </Paragraph>
                    <Paragraph className="text-center description1">
                        The guest will be charged a prepayment of the total price of the reservation within 14 days of arrival.

                    </Paragraph>

                </div>
            </SectionWithContainer>
        </main>
    )
}

export default page