// import Collection from '@/components/shared/Collection'
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/eventActions";
import {cookies} from "next/headers"
import { SearchParamProps } from "@/types";
import Link from "next/link";
import React from "react";
import jwt from "jsonwebtoken"
import { getOrdersByUser } from "@/lib/actions/orderActions";
import Collection from "@/components/shared/Collection";


const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const cookie = cookies();
  const obj = cookie.get("token");

  const user: any = obj ? jwt.decode(obj.value) : null;
  const userId = user.id;
  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId , page: ordersPage})

  // const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

  return (
    <>
      {/* My Tickets */}
      <div className="bg-[#1F1F1F]">
        <section className="bg-[#1F1F1F] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/#events">Explore More Events</Link>
            </Button>
          </div>
        </section>

        {/* <section className="wrapper my-8"> */}
        {/* <Collection 
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        /> */}
        {/* </section> */}

        {/* Events Organized */}
        <section className="bg-[#1F1F1F] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">
              Events Organized
            </h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/events/create">Create New Event</Link>
            </Button>
          </div>
        </section>

        <section className="wrapper ">
        <Collection 
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
