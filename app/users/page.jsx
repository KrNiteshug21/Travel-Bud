"use client";
import BuddyCards from "@/components/rootPage/BuddyCards";
import { useUsers } from "@/hooks/queries";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isError) return <div>Error: {error}</div>;

  return (
    <main className="mt-16 mb-4">
      <div className="mx-auto px-2 max-w-screen-xl">
        <h1 className="mb-4 font-semibold text-3xl text-center">Users</h1>
        <section className="flex flex-wrap justify-center gap-6">
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => index + 1).map((n) => (
                <CardSkeleton key={n} />
              ))
            : users?.map((user) => {
                return <BuddyCards key={user._id} user={user} />;
              })}
        </section>
      </div>
    </main>
  );
}
