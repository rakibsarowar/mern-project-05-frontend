import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'], // Pass an object with a queryKey property
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    });

    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllUsers;
