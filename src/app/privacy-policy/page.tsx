import { Heading, Paragraph, SectionWithContainer } from "@/components";

const page = () => {
    return (
        <main className="margin">
            <SectionWithContainer sectionClassName="bg-primary">
                <div className="flex flex-col items-center justify-center gap-4 pb-8">
                    <Heading
                        level={2}
                        className="text-center text-secondary capitalize font-montaga heading2"
                    >
                        Privacy Policy
                    </Heading>
                    <Paragraph className="text-center description1">
                        ORA Lakeview is committed to protecting your privacy. We collect and use personal data only for booking, communication, and improving guest experience. For detailed information, please refer to our full privacy policy.
                    </Paragraph>

                </div>
            </SectionWithContainer>
            <SectionWithContainer sectionClassName="">
                <div className="flex flex-col items-center justify-center gap-4 pb-2">
                    <Heading
                        level={2}
                        className="text-center text-secondary capitalize font-montaga heading2"
                    >
                        Terms & Conditions
                    </Heading>
                    <Paragraph className="text-center !text-[#262626] description1">
                        By booking with ORA Lakeview, you agree to our terms, including check-in and check-out times, payment policies, and adherence to our guest code of conduct.
                    </Paragraph>

                </div>
            </SectionWithContainer>
            <SectionWithContainer sectionClassName="">
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Child policies</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Children 5 and under can stay for free.

                    </Paragraph>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Children from 6 to 10 years old can stay for CHF 50.00 per child per night.
                    </Paragraph>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Children from 11 to 17 years old can stay for CHF 75.00 per child per night.

                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Internet</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	WiFi is available in all areas and is free of charge.

                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Parking</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        Parking info can now be found on the facilities & services page.
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Pets</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Pets are allowed. No extra charges.

                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Check-in & Check-out Times                    </strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Check-in from 2:00 PM to 10:00 PM

                    </Paragraph>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Check-in from 2:00 PM to 10:00 PM

                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Guest Address Details                    </strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Your guests do not have to provide their address details when they book.
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Guest Phone Number</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Your guests must provide a phone number when they book.
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Age Limit                    </strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	No age limit
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Curfew                    </strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	No curfew
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>30+ night stays {"("}monthly stays{")"}</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	You accept reservations for stays longer than 30 nights, up to a maximum of 90 nights.
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Group reservations</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	You have policy exceptions for group reservations of more than 4 rooms.
                    </Paragraph>

                </div>
                <div className="flex flex-col justify-center gap-4 pb-8">
                    <strong>Damage policy options</strong>
                    <Paragraph className=" !p-0 !text-[#262626] description1">
                        ⦁	Guests aren&apos;t required to pay a damage deposit.

                    </Paragraph>

                </div>
            </SectionWithContainer>
        </main>
    );
}

export default page;