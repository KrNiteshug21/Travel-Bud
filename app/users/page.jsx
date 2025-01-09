"use client";
import BuddyCards from "@/components/rootPage/BuddyCards";
import { useUsers } from "@/hooks/queries";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="mt-16 mb-4">
      <SectionWrapper>
        <h1 className="mb-4 font-semibold text-3xl text-center">Users</h1>
        <section className="gap-4 space-y-4 p-4 columns-1 md:columns-2 lg:columns-3">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
                <CardSkeleton key={n} />
              ))
            : users?.map((user) => {
                return <BuddyCards key={user._id} user={user} />;
              })}
        </section>
      </SectionWrapper>
    </main>
  );
}
