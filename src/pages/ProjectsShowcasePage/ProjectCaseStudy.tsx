import { Fragment } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { getArchitectureImage } from "./ProjectCaseStudy.data.ts";

import {
  CaseStudyMain,
  ChallengeColumn,
  ChallengeFlow,
  ChallengeFlowArrow,
  ChallengeFlowIcon,
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
  ProcessCategory,
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
import {
  HERO_META_KEYS,
  type ProjectCaseStudyProps,
  TECHNICAL_DECISION_ICONS,
} from "./ProjectCaseStudy.types.ts";
import { getProjectNavigation } from "./ProjectCaseStudy.navigation.ts";

export const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;

  const resultImage = getArchitectureImage(language);

  const projectTranslationKey = `caseStudies.items.${project.id}`;

  const translateProject = (key: string) =>
    t(`${projectTranslationKey}.${key}`);

  const navigation = getProjectNavigation(project, t);

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
                onLoad={() => {
                  console.log(
                    "Hero image loaded:",
                    project.images.hero.desktop,
                  );
                }}
                onError={(event) => {
                  console.error(
                    "Hero image failed:",
                    event.currentTarget.src,
                    project.images.hero.desktop,
                  );
                }}
              />
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
            {project.flow.map((flowItem, index) => {
              const FlowIcon = flowItem.icon;

              return (
                <Fragment key={flowItem.id}>
                  <ChallengeFlowItem>
                    <ChallengeFlowNumber>{flowItem.number}</ChallengeFlowNumber>

                    <ChallengeFlowIcon aria-hidden="true">
                      <FlowIcon size={26} strokeWidth={1.7} />
                    </ChallengeFlowIcon>

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
              );
            })}
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

              <ProcessCategory>
                {translateProject("process.before.category")}
              </ProcessCategory>

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

              <ProcessCategory>
                {translateProject("process.after.category")}
              </ProcessCategory>

              <ProcessTitle>
                {translateProject("process.after.title")}
              </ProcessTitle>

              <p>{translateProject("process.after.description")}</p>

              <ProcessImageFrame>
                <ProcessImage
                  src={resultImage}
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
          <NavigationLink href={navigation.previous.href}>
            <ArrowLeft size={20} aria-hidden="true" />

            <span>
              <NavigationLinkLabel>
                {navigation.previous.label}
              </NavigationLinkLabel>

              <NavigationLinkTitle>
                {navigation.previous.title}
              </NavigationLinkTitle>
            </span>
          </NavigationLink>

          <NavigationLink href={navigation.next.href} data-align="right">
            <span>
              <NavigationLinkLabel>{navigation.next.label}</NavigationLinkLabel>

              <NavigationLinkTitle>{navigation.next.title}</NavigationLinkTitle>
            </span>

            <ArrowRight size={20} aria-hidden="true" />
          </NavigationLink>
        </ContentContainer>
      </NavigationSection>
    </CaseStudyMain>
  );
};
