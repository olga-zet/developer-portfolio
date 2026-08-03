import {
  AccentCorner,
  Actions,
  BackHomeButton,
  CodeDecoration,
  Content,
  Description,
  DotGrid,
  ErrorCode,
  ErrorVisual,
  GlitchBar,
  Page,
  PageTitle,
  ProjectsLink,
  Scanner
} from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <Page>
      <AccentCorner aria-hidden="true" />

      <DotGrid $position="left" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} />
        ))}
      </DotGrid>

      <DotGrid $position="right" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} />
        ))}
      </DotGrid>

      <Content>
        <ErrorVisual>
          <ErrorCode data-text="404">404</ErrorCode>

          <GlitchBar $top="28%" aria-hidden="true" />
          <GlitchBar $top="51%" aria-hidden="true" />
          <GlitchBar $top="73%" aria-hidden="true" />

          <Scanner aria-hidden="true" />

          <CodeDecoration aria-hidden="true">
            <span>01</span>
            <span>NOT_FOUND</span>
            <span>404</span>
          </CodeDecoration>
        </ErrorVisual>

        <PageTitle>Page not found</PageTitle>

        <Description>
          The page you’re looking for doesn’t exist
          <br />
          or has been moved.
        </Description>

        <Actions>
          <BackHomeButton to="/">
            <span>Back home</span>
            <strong aria-hidden="true">→</strong>
          </BackHomeButton>

          <ProjectsLink href="/#projects">
            <span>View projects</span>
            <strong aria-hidden="true">→</strong>
          </ProjectsLink>
        </Actions>
      </Content>
    </Page>
  );
};
