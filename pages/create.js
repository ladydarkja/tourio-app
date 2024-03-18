import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWR from "swr";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const { mutate } = useSWR("/api/places");
  const router = useRouter();

  async function addSite(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const siteData = Object.fromEntries(formData);

    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(siteData),
    });

    if (response.ok) {
      mutate();
    }

    return (
      <>
        <h2 id="add-site">Add Site</h2>
        <Link href="/" passHref legacyBehavior>
          <StyledBackLink>back</StyledBackLink>
        </Link>
        <Form onSubmit={addSite} formName={"add-site"} />
      </>
    );
  }
}
