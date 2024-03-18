import styled from "styled-components";
import Card from "@/components/Card.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });
  console.log(data);
  return (
    <>
      <List role="list">
        {data.map((site) => {
          return (
            <ListItem key={site._id}>
              <Card
                name={site.name}
                image={site.image}
                location={site.location}
                id={site._id}
              />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ site</FixedLink>
      </Link>
    </>
  );
}
