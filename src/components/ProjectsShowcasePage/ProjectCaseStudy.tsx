import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  LayoutTemplate,
  ListChecks,
  LockKeyhole,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  type ProjectCaseStudyData,
  PROJECTS,
  type TechnicalDecisionIcon,
} from "./ProjectCaseStudy.data.ts";

import {
  CaseStudyMain,
  ChallengeColumn,
  ChallengeFlow,
  ChallengeFlowArrow,
  ChallengeFlowItem,
  ChallengeFlowLabel,
  ChallengeFlowNumber,
  ChallengeGrid,
  ChallengeSection,
  ContentContainer,
  DarkSection,
  DarkSectionGrid,
  DecisionCard,
  DecisionDescription,
  DecisionHeader,
  DecisionIcon,
  DecisionTitle,
  Eyebrow,
  FeatureArticle,
  FeatureContent,
  FeatureDescription,
  FeatureImage,
  FeatureImageFrame,
  FeatureNumber,
  FeaturesGrid,
  FeaturesSection,
  FeatureTitle,
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroImageDecoration,
  HeroImageFrame,
  HeroImageMobile,
  HeroImageMobileFrame,
  HeroMeta,
  HeroMetaItem,
  HeroMetaLabel,
  HeroMetaValue,
  HeroSection,
  HeroStack,
  HeroStackItem,
  HeroTitle,
  NavigationLink,
  NavigationLinkLabel,
  NavigationLinkTitle,
  NavigationSection,
  OverviewContent,
  OverviewGallery,
  OverviewGalleryImage,
  OverviewHeader,
  OverviewSection,
  PrimaryButton,
  ProcessArrow,
  ProcessCard,
  ProcessContent,
  ProcessImage,
  ProcessImageFrame,
  ProcessLabel,
  ProcessSection,
  ProcessTitle,
  ResultContent,
  ResultCopy,
  ResultDescription,
  ResultIllustration,
  ResultSection,
  ResultStats,
  SecondaryButton,
  SectionDivider,
  SectionHeader,
  SectionIndex,
  SectionTitle,
  StatItem,
  StatLabel,
  StatValue,
  TechnicalHeader,
} from "./ProjectCaseStudy.styled.ts";

type ProjectCaseStudyProps = {
  project: ProjectCaseStudyData;
};

const TECHNICAL_DECISION_ICONS: Record<TechnicalDecisionIcon, LucideIcon> = {
  layers: Layers3,
  code: Code2,
  database: Database,
  lock: LockKeyhole,
  form: ListChecks,
  layout: LayoutTemplate,
};

const HERO_META_KEYS = ["role", "year", "type"] as const;

export const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  const { t } = useTranslation();

  const projectTranslationKey = `caseStudies.items.${project.id}`;

  const translateProject = (key: string) =>
    t(`${projectTranslationKey}.${key}`);

  const currentProjectIndex = PROJECTS.findIndex(
    ({ slug }) => slug === project.slug,
  );

  const previousProject =
    currentProjectIndex > 0 ? PROJECTS[currentProjectIndex - 1] : undefined;

  const nextProject =
    currentProjectIndex < PROJECTS.length - 1
      ? PROJECTS[currentProjectIndex + 1]
      : undefined;

  const getProjectTitle = (selectedProject: ProjectCaseStudyData) => {
    const titleKey = `caseStudies.items.${selectedProject.id}.hero.title`;

    return `${t(`${titleKey}.first`)} ${t(`${titleKey}.second`)}`;
  };

  const previousNavigation = previousProject
    ? {
        href: `/projects/${previousProject.slug}`,
        label: t("caseStudies.navigation.previous"),
        title: getProjectTitle(previousProject),
      }
    : {
        href: "/#projects",
        label: t("caseStudies.navigation.backTo"),
        title: t("caseStudies.navigation.allProjects"),
      };

  const nextNavigation = nextProject
    ? {
        href: `/projects/${nextProject.slug}`,
        label: t("caseStudies.navigation.next"),
        title: getProjectTitle(nextProject),
      }
    : {
        href: "/#projects",
        label: t("caseStudies.navigation.backTo"),
        title: t("caseStudies.navigation.allProjects"),
      };

  return (
    <CaseStudyMain>
      <HeroSection>
        <ContentContainer>
          <HeroContent>
            <div>
              <Eyebrow>
                <span>{project.number}</span>

                {translateProject("hero.label")}
              </Eyebrow>

              <HeroTitle>
                {translateProject("hero.title.first")}
                <br />
                {translateProject("hero.title.second")}
              </HeroTitle>

              <HeroDescription>
                {translateProject("hero.description")}
              </HeroDescription>

              <HeroActions>
                <PrimaryButton
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translateProject("hero.actions.demo")}

                  <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
                </PrimaryButton>

                {project.repositoryRequestUrl && (
                  <SecondaryButton href={project.repositoryRequestUrl}>
                    {translateProject("hero.actions.repository")}

                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </SecondaryButton>
                )}
              </HeroActions>

              <HeroStack>
                {project.tags.map((tag) => (
                  <HeroStackItem key={tag}>{tag}</HeroStackItem>
                ))}
              </HeroStack>
            </div>

            <HeroImageFrame>
              <HeroImage
                src={project.images.hero.desktop}
                alt={translateProject("hero.images.desktopAlt")}
              />

              <HeroImageMobileFrame>
                <HeroImageMobile
                  src={project.images.hero.mobile}
                  alt={translateProject("hero.images.mobileAlt")}
                />
              </HeroImageMobileFrame>

              <HeroImageDecoration aria-hidden="true" />
            </HeroImageFrame>
          </HeroContent>

          <HeroMeta>
            {HERO_META_KEYS.map((metaKey) => (
              <HeroMetaItem key={metaKey}>
                <HeroMetaLabel>
                  {translateProject(`hero.meta.${metaKey}.label`)}
                </HeroMetaLabel>

                <HeroMetaValue>
                  {translateProject(`hero.meta.${metaKey}.value`)}
                </HeroMetaValue>
              </HeroMetaItem>
            ))}
          </HeroMeta>
        </ContentContainer>
      </HeroSection>

      <SectionDivider />

      <OverviewSection>
        <ContentContainer>
          <SectionHeader>
            <SectionIndex>
              02 / {t("caseStudies.sections.overview")}
            </SectionIndex>
          </SectionHeader>

          <OverviewHeader>
            <SectionTitle>
              {translateProject("overview.title.first")}
              <br />
              {translateProject("overview.title.second")}
            </SectionTitle>

            <OverviewContent>
              {translateProject("overview.description")}
            </OverviewContent>
          </OverviewHeader>

          <OverviewGallery>
            {project.images.overview.map((image, index) => (
              <OverviewGalleryImage
                key={`${project.id}-overview-${index}`}
                src={image}
                alt={translateProject(`overview.imageAlts.${index}`)}
              />
            ))}
          </OverviewGallery>
        </ContentContainer>
      </OverviewSection>

      <SectionDivider />

      <ChallengeSection>
        <ContentContainer>
          <SectionHeader>
            <SectionIndex>
              03 / {t("caseStudies.sections.challengeAndSolution")}
            </SectionIndex>
          </SectionHeader>

          <ChallengeGrid>
            <ChallengeColumn>
              <SectionTitle as="h2">
                {translateProject("challengeAndSolution.challenge.title")}
              </SectionTitle>

              <p>
                {translateProject("challengeAndSolution.challenge.description")}
              </p>
            </ChallengeColumn>

            <ChallengeColumn>
              <SectionTitle as="h2">
                {translateProject("challengeAndSolution.solution.title")}
              </SectionTitle>

              <p>
                {translateProject("challengeAndSolution.solution.description")}
              </p>
            </ChallengeColumn>
          </ChallengeGrid>

          <ChallengeFlow>
            {project.flow.map((flowItem, index) => (
              <Fragment key={flowItem.id}>
                <ChallengeFlowItem>
                  <ChallengeFlowNumber>{flowItem.number}</ChallengeFlowNumber>

                  <ChallengeFlowLabel>
                    {translateProject(
                      `challengeAndSolution.flow.${flowItem.id}`,
                    )}
                  </ChallengeFlowLabel>
                </ChallengeFlowItem>

                {index < project.flow.length - 1 && (
                  <ChallengeFlowArrow aria-hidden="true">
                    <ArrowRight size={22} />
                  </ChallengeFlowArrow>
                )}
              </Fragment>
            ))}
          </ChallengeFlow>
        </ContentContainer>
      </ChallengeSection>

      <SectionDivider />

      <FeaturesSection>
        <ContentContainer>
          <SectionHeader>
            <SectionIndex>
              04 / {t("caseStudies.sections.features")}
            </SectionIndex>
          </SectionHeader>

          <FeaturesGrid>
            {project.features.map((feature) => {
              const featureTranslationKey = `features.items.${feature.id}`;

              return (
                <FeatureArticle key={feature.id}>
                  <FeatureContent>
                    <FeatureNumber>{feature.number}</FeatureNumber>

                    <FeatureTitle>
                      {translateProject(`${featureTranslationKey}.title`)}
                    </FeatureTitle>

                    <FeatureDescription>
                      {translateProject(`${featureTranslationKey}.description`)}
                    </FeatureDescription>
                  </FeatureContent>

                  <FeatureImageFrame>
                    <FeatureImage
                      src={feature.image}
                      alt={translateProject(
                        `${featureTranslationKey}.imageAlt`,
                      )}
                    />
                  </FeatureImageFrame>
                </FeatureArticle>
              );
            })}
          </FeaturesGrid>
        </ContentContainer>
      </FeaturesSection>

      <DarkSection id="technical-decisions">
        <ContentContainer>
          <SectionIndex>
            05 / {t("caseStudies.sections.technicalDecisions")}
          </SectionIndex>

          <DarkSectionGrid>
            <TechnicalHeader>
              {translateProject("technicalDecisions.title.first")}
              <br />
              {translateProject("technicalDecisions.title.second")}
            </TechnicalHeader>

            {project.technicalDecisions.map((decision) => {
              const Icon = TECHNICAL_DECISION_ICONS[decision.icon];

              const decisionTranslationKey = `technicalDecisions.items.${decision.id}`;

              return (
                <DecisionCard key={decision.id}>
                  <DecisionHeader>
                    <DecisionIcon>
                      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                    </DecisionIcon>

                    <DecisionTitle>
                      {translateProject(`${decisionTranslationKey}.title`)}
                    </DecisionTitle>
                  </DecisionHeader>

                  <DecisionDescription>
                    {translateProject(`${decisionTranslationKey}.description`)}
                  </DecisionDescription>
                </DecisionCard>
              );
            })}
          </DarkSectionGrid>
        </ContentContainer>
      </DarkSection>

      <ProcessSection>
        <ContentContainer>
          <SectionHeader>
            <SectionIndex>
              06 / {t("caseStudies.sections.process")}
            </SectionIndex>
          </SectionHeader>

          <ProcessContent>
            <ProcessCard>
              <ProcessLabel>
                {translateProject("process.before.label")}
              </ProcessLabel>

              <ProcessTitle>
                {translateProject("process.before.title")}
              </ProcessTitle>

              <p>{translateProject("process.before.description")}</p>

              <ProcessImageFrame>
                <ProcessImage
                  src={project.images.process.before}
                  alt={translateProject("process.before.imageAlt")}
                />
              </ProcessImageFrame>
            </ProcessCard>

            <ProcessArrow aria-hidden="true">
              <ArrowRight size={24} />
            </ProcessArrow>

            <ProcessCard>
              <ProcessLabel>
                {translateProject("process.after.label")}
              </ProcessLabel>

              <ProcessTitle>
                {translateProject("process.after.title")}
              </ProcessTitle>

              <p>{translateProject("process.after.description")}</p>

              <ProcessImageFrame>
                <ProcessImage
                  src={project.images.process.after}
                  alt={translateProject("process.after.imageAlt")}
                />
              </ProcessImageFrame>
            </ProcessCard>
          </ProcessContent>
        </ContentContainer>
      </ProcessSection>

      <SectionDivider />

      <ResultSection>
        <ContentContainer>
          <SectionHeader>
            <SectionIndex>07 / {t("caseStudies.sections.result")}</SectionIndex>
          </SectionHeader>

          <ResultContent>
            <ResultStats>
              {project.stats.map((stat) => (
                <StatItem key={stat.id}>
                  <StatValue>{stat.value}</StatValue>

                  <StatLabel>
                    {translateProject(`result.stats.${stat.id}`)}
                  </StatLabel>
                </StatItem>
              ))}
            </ResultStats>

            <ResultCopy>
              <ResultDescription>
                {translateProject("result.description")}
              </ResultDescription>

              <ResultDescription>
                {translateProject("result.lesson")}
              </ResultDescription>
            </ResultCopy>

            {project.images.result && (
              <ResultIllustration
                src={project.images.result}
                alt=""
                aria-hidden="true"
              />
            )}
          </ResultContent>
        </ContentContainer>
      </ResultSection>

      <NavigationSection>
        <ContentContainer>
          <NavigationLink href={previousNavigation.href}>
            <ArrowLeft size={20} aria-hidden="true" />

            <span>
              <NavigationLinkLabel>
                {previousNavigation.label}
              </NavigationLinkLabel>

              <NavigationLinkTitle>
                {previousNavigation.title}
              </NavigationLinkTitle>
            </span>
          </NavigationLink>

          <NavigationLink href={nextNavigation.href} data-align="right">
            <span>
              <NavigationLinkLabel>{nextNavigation.label}</NavigationLinkLabel>

              <NavigationLinkTitle>{nextNavigation.title}</NavigationLinkTitle>
            </span>

            <ArrowRight size={20} aria-hidden="true" />
          </NavigationLink>
        </ContentContainer>
      </NavigationSection>
    </CaseStudyMain>
  );
};
