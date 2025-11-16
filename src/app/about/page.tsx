'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import '@/styles/about-us.css'; // ⬅️ make sure this line is here

/* --------------------------------- HERO --------------------------------- */

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  overlayOpacity?: number; // 0 - 1
  children?: ReactNode;
};

function HeroSection({
  title,
  subtitle,
  imageUrl,
  overlayOpacity = 0.65,
  children,
}: HeroSectionProps) {
  return (
    <section className="about-hero">
      <div className="about-hero-image-wrapper">
        <Image
          src={imageUrl}
          alt="About hero background"
          fill
          priority
          className="about-hero-image"
          sizes="100vw"
        />
        <div
          className="about-hero-overlay"
          style={{ opacity: overlayOpacity }}
        />
        <div className="about-hero-content">
          <div className="about-hero-inner">
            <h1 className="about-hero-title">{title}</h1>
            {subtitle && <p className="about-hero-subtitle">{subtitle}</p>}
            {children && <div className="about-hero-extra">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INFO BLOCKS ------------------------------ */

type InfoItem = {
  title: string;
  text: string;
  icon?: ReactNode;
};

type InfoBlocksProps = {
  items: InfoItem[];
};

function InfoBlocks({ items }: InfoBlocksProps) {
  return (
    <section className="about-info">
      <div className="about-container">
        <div className="about-info-grid">
          {items.map((item, i) => (
            <div key={i} className="about-info-card">
              <div className="about-info-icon-wrapper">
                {item.icon ?? <span aria-hidden>📍</span>}
              </div>
              <h3 className="about-info-title">{item.title}</h3>
              <p className="about-info-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- LEADERSHIP GRID ---------------------------- */

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

type LeadershipSectionProps = {
  heading: string;
  subheading?: string;
  team: TeamMember[];
};

function LeadershipSection({ heading, subheading, team }: LeadershipSectionProps) {
  return (
    <section className="about-leadership">
      <div className="about-container">
        <header className="about-section-header">
          <p className="about-eyebrow">Our Team</p>
          <h2 className="about-section-title">{heading}</h2>
          {subheading && <p className="about-section-subtitle">{subheading}</p>}
        </header>

        <div className="about-leadership-grid">
          {team.map((m, i) => (
            <article key={i} className="about-leader-card">
              <div className="about-leader-image-wrapper">
                <Image
                  src={m.imageUrl}
                  alt={m.name}
                  fill
                  className="about-leader-image"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="about-leader-content">
                <h3 className="about-leader-name">{m.name}</h3>
                <p className="about-leader-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- VISION SPLIT ------------------------------ */

type VisionSectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  imageUrl: string;
};

function VisionSection({
  eyebrow = 'Our Vision',
  title,
  text,
  imageUrl,
}: VisionSectionProps) {
  return (
    <section className="about-vision">
      <div className="about-container">
        <div className="about-vision-grid">
          <div className="about-vision-image-wrapper">
            <div className="about-vision-image-inner">
              <Image
                src={imageUrl}
                alt="Vision image"
                fill
                className="about-vision-image"
              />
            </div>
          </div>

          <div className="about-vision-text">
            <p className="about-eyebrow-light">{eyebrow}</p>
            <h3 className="about-section-title-light">{title}</h3>
            <p className="about-vision-body">{text}</p>

            <ul className="about-vision-list">
              <li>1. We seek unity in essential beliefs</li>
              <li>2. We value liberty in non-essential beliefs</li>
              <li>3. We pursue love in all things</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ NEXT STEPS ------------------------------- */

type Step = {
  number: number;
  title: string;
  text: string;
  imageUrl: string;
};

type NextStepsProps = {
  eyebrow?: string;
  title: string;
  steps: Step[];
};

function NextSteps({ eyebrow = "What's next?", title, steps }: NextStepsProps) {
  return (
    <section className="about-next-steps">
      <div className="about-container">
        <header className="about-section-header">
          <p className="about-eyebrow">{eyebrow}</p>
          <h3 className="about-section-title">{title}</h3>
          <p className="about-section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </header>

        <div className="about-next-steps-grid">
          {steps.map((s) => (
            <article key={s.number} className="about-step-card">
              <div className="about-step-badge">{s.number}</div>
              <div className="about-step-image-wrapper">
                <Image
                  src={s.imageUrl}
                  alt={s.title}
                  fill
                  className="about-step-image"
                />
              </div>
              <div className="about-step-content">
                <h4 className="about-step-title">{s.title}</h4>
                <p className="about-step-text">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- STATS --------------------------------- */

type Stat = { label: string; value: string | number };

type StatsSectionProps = {
  stats: Stat[];
  ctaEyebrow?: string;
  ctaTitle: string;
  ctaButtonText: string;
  onCta?: () => void;
};

function StatsSection({
  stats,
  ctaEyebrow = 'This Month',
  ctaTitle,
  ctaButtonText,
  onCta,
}: StatsSectionProps) {
  return (
    <section className="about-stats">
      <div className="about-container">
        <div className="about-stats-grid">
          <div className="about-stats-list">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-item">
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-stats-cta">
            <p className="about-eyebrow">{ctaEyebrow}</p>
            <h4 className="about-stats-title">{ctaTitle}</h4>
            <button
              onClick={onCta}
              className="about-stats-button"
            >
              {ctaButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PAGE VIEW ------------------------------- */

export default function AboutPage() {
  return (
    <main className="about-page">
      <HeroSection
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
        overlayOpacity={0.72}
      />

      <InfoBlocks
        items={[
          {
            title: 'One Church. Multiple Locations.',
            text: 'We are one family meeting across locations to reach our city.',
            icon: <span aria-hidden>🗺️</span>,
          },
          {
            title: 'Take Your Next Step.',
            text: 'Join a small group, get baptized, or serve with a team.',
            icon: <span aria-hidden>⏳</span>,
          },
          {
            title: 'You Make a Difference.',
            text: 'Your generosity and service are changing lives every week.',
            icon: <span aria-hidden>🙌</span>,
          },
        ]}
      />

      <LeadershipSection
        heading="Our Leadership"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        team={[
          {
            name: 'Willie Redd',
            role: 'Senior Pastor',
            imageUrl:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
          },
          {
            name: 'Brent & Ophelia Truitt',
            role: 'Youth Leaders',
            imageUrl:
              'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1200&auto=format&fit=crop',
          },
          {
            name: 'Patrick Roberts',
            role: 'Elder',
            imageUrl:
              'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
          },
        ]}
      />

      <VisionSection
        title="What We Believe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
      />

      <NextSteps
        title="Next Steps"
        steps={[
          {
            number: 1,
            title: 'Get Connected',
            text: 'Join the family and discover your place here.',
            imageUrl:
              'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
          },
          {
            number: 2,
            title: 'Get Involved',
            text: 'Serve on a team and be part of the mission.',
            imageUrl:
              'https://images.unsplash.com/photo-1593113598332-cd9fcdf00028?q=80&w=1200&auto=format&fit=crop',
          },
          {
            number: 3,
            title: 'Grow',
            text: 'Take classes and grow in your faith.',
            imageUrl:
              'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
          },
        ]}
      />

      <StatsSection
        stats={[
          { label: 'Volunteers', value: 759 },
          { label: 'Pounds of Food Given', value: '23,090' },
          { label: 'Bibles Given Out', value: 356 },
          { label: 'Families Served', value: '1,640' },
        ]}
        ctaEyebrow="This November"
        ctaTitle="Become a part of something great"
        ctaButtonText="Contact Us"
        onCta={() => (window.location.href = '/contact')}
      />
    </main>
  );
}
