
import ResumeLensHero from '../ResumeLensHero';

/**
 * @typedef {{ id: string; name: string | null; email: string | null } | null} SectionInitialUser
 */

/**
 * @param {{ initialUser?: SectionInitialUser }} props
 */

const Sec1 = () => {
  return (
    <>
    <ResumeLensHero

                resumeImage="/animation/resume.jpg"

                scoreImage="/animation/score.jpg"

                recommendationImage="/animation/recommendation.jpg"

                skillsImage="/animation/skills.jpg"

                summaryImage="/animation/summary.jpg"

              />
    </>
  )
}

export default Sec1
