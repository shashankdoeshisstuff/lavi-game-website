import { cn } from '@/lib/utils';
import Image from 'next/image';

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------

const BRANDING_FONT_FAMILY = "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif";

const DEFAULT_LOGO_PATH = '/images/logo.png';

// ----------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Variant = 'default' | 'gradient' | 'outline' | 'minimal';
type LogoPosition = 'left' | 'top';

interface BaseBrandingProps {
  /** Text size variant */
  size?: Size;
  /** Uppercase text */
  uppercase?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show the logo image */
  showLogo?: boolean;
  /** Custom logo image source */
  logoSrc?: string;
  /** Logo size relative to text (desktop) */
  logoSize?: 'xs' | 'sm' | 'md' | 'lg';
}

// ----------------------------------------------------------------------
// Main Branding Component (static, no animations)
// ----------------------------------------------------------------------

export interface BrandingProps extends BaseBrandingProps {
  /** Visual style variant */
  variant?: Variant;
  /** Show tagline below main text */
  showTagline?: boolean;
  /** Tagline text (default: "Building the Future of Gaming") */
  tagline?: string;
  /** Logo placement relative to text */
  logoPosition?: LogoPosition;
}

export default function Branding({
  size = 'md',
  variant = 'default',
  showTagline = false,
  uppercase = true,
  showLogo = false,
  logoSrc = DEFAULT_LOGO_PATH,
  logoPosition = 'left',
  logoSize = 'md',
  tagline = 'Building the Future of Gaming',
  className,
}: BrandingProps) {
  const textSizeClasses: Record<Size, string> = {
    xs: 'text-lg tracking-wider',
    sm: 'text-xl md:text-2xl tracking-wider',
    md: 'text-2xl md:text-3xl lg:text-4xl tracking-wide',
    lg: 'text-4xl md:text-5xl lg:text-6xl tracking-wide',
    xl: 'text-5xl md:text-6xl lg:text-7xl tracking-wide',
    '2xl': 'text-6xl md:text-7xl lg:text-8xl tracking-wide',
  };

  const variantClasses: Record<Variant, string> = {
    default: 'text-foreground',
    gradient: 'bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent',
    outline: 'text-outline',
    minimal: 'text-muted-foreground',
  };

  const taglineSizeClasses: Record<Size, string> = {
    xs: 'text-xs tracking-widest',
    sm: 'text-xs tracking-widest',
    md: 'text-sm tracking-widest',
    lg: 'text-base tracking-widest',
    xl: 'text-lg tracking-widest',
    '2xl': 'text-xl tracking-widest',
  };

  const logoSizeClasses: Record<NonNullable<BrandingProps['logoSize']>, string> = {
    xs: 'w-4 h-4 md:w-5 md:h-5',
    sm: 'w-6 h-6 md:w-8 md:h-8',
    md: 'w-8 h-8 md:w-10 md:h-10',
    lg: 'w-12 h-12 md:w-14 md:h-14',
  };

  const isHorizontal = logoPosition === 'left';
  const wrapperClasses = cn(
    'flex items-center justify-center',
    !isHorizontal && 'flex-col',
    className
  );

  const logoElement = showLogo ? (
    <div className={cn('relative shrink-0', logoSizeClasses[logoSize])}>
      <Image
        src={logoSrc}
        alt="Axenet logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 1.5rem, 2rem"
      />
    </div>
  ) : null;

  return (
    <div className={wrapperClasses}>
      <div className="relative flex items-center gap-3">
        {isHorizontal && logoElement}
        <span
          className={cn(
            'font-bold select-none',
            uppercase && 'uppercase',
            textSizeClasses[size],
            variantClasses[variant]
          )}
          style={{
            fontFamily: BRANDING_FONT_FAMILY,
            fontWeight: 700,
            ...(variant === 'outline' && {
              WebkitTextStroke: '1px currentColor',
              textShadow: 'none',
              color: 'transparent',
            }),
          }}
        >
          {uppercase ? 'AXENET' : 'Axenet'}
        </span>
        {!isHorizontal && logoElement && <div className="mt-1">{logoElement}</div>}
      </div>

      {showTagline && (
        <p
          className={cn(
            'text-muted-foreground font-semibold mt-2',
            uppercase && 'uppercase',
            taglineSizeClasses[size]
          )}
          style={{ fontFamily: BRANDING_FONT_FAMILY }}
        >
          {tagline}
        </p>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// Compact Branding (for headers / nav)
// ----------------------------------------------------------------------

export interface CompactBrandingProps extends BaseBrandingProps {
  size?: 'sm' | 'md';
}

export function CompactBranding({
  size = 'sm',
  uppercase = true,
  showLogo = true,
  logoSrc = DEFAULT_LOGO_PATH,
  logoSize = 'sm',
  className,
}: CompactBrandingProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
  };

  const logoSizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {showLogo && (
        <div className={cn('relative shrink-0', logoSizeClasses[logoSize])}>
          <Image
            src={logoSrc}
            alt="Axenet logo"
            fill
            className="object-contain"
            sizes="1.5rem"
          />
        </div>
      )}
      <span
        className={cn(
          'font-bold tracking-wide',
          uppercase && 'uppercase',
          textSizeClasses[size]
        )}
        style={{ fontFamily: BRANDING_FONT_FAMILY, fontWeight: 700 }}
      >
        {uppercase ? 'AXENET' : 'Axenet'}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------------
// Icon Branding (colored background, larger logo)
// ----------------------------------------------------------------------

export interface IconBrandingProps extends BaseBrandingProps {
  size?: 'sm' | 'md' | 'lg';
  iconSize?: 'sm' | 'md' | 'lg';
}

export function IconBranding({
  size = 'md',
  iconSize = 'md',
  uppercase = true,
  showLogo = true,
  logoSrc = DEFAULT_LOGO_PATH,
  className,
}: IconBrandingProps) {
  const textSizes = {
    sm: 'text-lg tracking-wider',
    md: 'text-xl tracking-wide',
    lg: 'text-2xl tracking-wide',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {showLogo && (
        <div
          className={cn(
            'bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center overflow-hidden',
            iconSizes[iconSize]
          )}
        >
          <Image
            src={logoSrc}
            alt="Axenet Logo"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      )}
      <span
        className={cn(
          'font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent',
          uppercase && 'uppercase',
          textSizes[size]
        )}
        style={{ fontFamily: BRANDING_FONT_FAMILY, fontWeight: 700 }}
      >
        {uppercase ? 'AXENET' : 'Axenet'}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------------
// Watermark Branding (background layer)
// ----------------------------------------------------------------------

export interface WatermarkBrandingProps {
  opacity?: number;
  className?: string;
  uppercase?: boolean;
  showLogo?: boolean;
  logoSrc?: string;
  text?: string;
}

export function WatermarkBranding({
  opacity = 10,
  className,
  uppercase = true,
  showLogo = false,
  logoSrc = DEFAULT_LOGO_PATH,
  text = 'AXENET',
}: WatermarkBrandingProps) {
  const content = showLogo ? (
    <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
      <Image
        src={logoSrc}
        alt="Watermark logo"
        fill
        className="object-contain opacity-30"
        priority={false}
      />
    </div>
  ) : (
    <div
      className="font-black tracking-wider select-none text-9xl md:text-[20rem] lg:text-[30rem]"
      style={{
        fontFamily: BRANDING_FONT_FAMILY,
        fontWeight: 700,
        opacity: opacity / 100,
        color: 'currentColor',
      }}
    >
      {uppercase ? text.toUpperCase() : text}
    </div>
  );

  return (
    <div
      className={cn(
        'fixed inset-0 pointer-events-none -z-10 flex items-center justify-center',
        className
      )}
      aria-hidden="true"
    >
      {content}
    </div>
  );
}