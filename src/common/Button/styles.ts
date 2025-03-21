import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#E26A2C"}; /* Warm, inviting orange */
  color: ${(p) => (p.color ? "#4A2C2A" : "#fff")}; /* Dark brown for natural warmth */
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 2px solid #f5d0b5; /* Soft beige for a homely feel */
  border-radius: 8px; /* Slightly rounded for a cozy touch */
  padding: 14px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 12px 24px rgba(226, 106, 44, 0.2); /* Softer, warm shadow */

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 2px solid #d45a1d;
    background-color: #d45a1d; /* Slightly deeper warm orange */
  }
`;
