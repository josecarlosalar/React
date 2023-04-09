import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { MemberEntity } from "@/pods";
import {
  SearchOrganization,
  GridMembers
} from "@/github-api";
import { AppLayout } from "@/layout";
import { datosOrg } from "./list.vm";

interface Props {
    members: MemberEntity[];
    handleSearch: (organizationName: string) => void;
    organization: datosOrg[];
  }
  

export const ListComponent: React.FC<Props> = (props) => {
  const {organizacion} = useParams();
  const {members, handleSearch, organization} = props;
  const [organizationName, setOrganizationName] = React.useState<string>(organizacion);

  return (
    <AppLayout>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <SearchOrganization
              organizationName={organizationName}
              onchangeOrganization={setOrganizationName}
              onSearch={handleSearch}
            />
          </Grid>
          
          <Grid container item xs={12} sm={6}>
            <Grid item xs={4} sm={4}>
                <img className="imagen-org sombra-img" src={organization[0]?.avatar_url} />
            </Grid>
            <Grid item xs={8} sm={8} className="datosOrg">
                <h2>Organización</h2>
                <h3>{organization[0]?.name}</h3>
                <p>{organization[0]?.description}</p>
                <p>{organization[0]?.followers} <span><strong>Followers</strong></span> | {organization[0]?.following} <span><strong>Following</strong></span></p>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} style={{ maxHeight: 700, overflow: "auto" }}>
            <h2>Miembros</h2>
            <GridMembers members={members} organizationName={organizationName}/>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};