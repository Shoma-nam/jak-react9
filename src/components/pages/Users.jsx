import styled from "styled-components";
import { SearchInput } from "../atoms/molecules/SearchInput";

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  pading: 24px;
`;
