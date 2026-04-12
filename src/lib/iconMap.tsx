/**
 * Centralised icon registry.
 * Components that render icons stored as strings in content.ts
 * import DynamicIcon and pass the icon name as a prop.
 *
 * Add new mappings here as needed — no other file needs to change.
 */

import React from "react";
import {
  Target,
  Users,
  ScrollText,
  Zap,
  Music,
  BookOpen,
  Handshake,
  Flame,
  Baby,
  Accessibility,
  Cross,
  Wind,
  Church,
  Globe,
  CreditCard,
  Building2,
  HandHeart,
  HeartHandshake,
  MapPin,
  Clock,
  Lock,
  CheckCircle,
  Play,
  Map,
  ClipboardList,
  Check,
  Image,
  Radio,
  Moon,
  Sunrise,
  Heart,
  Quote,
  Link,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Pencil,
  type LucideProps,
} from "lucide-react";

export const iconRegistry: Record<string, React.ComponentType<LucideProps>> = {
  // Benefits
  Target,
  Users,
  ScrollText,
  Zap,
  // Services – what to expect
  Music,
  BookOpen,
  Handshake,
  Flame,
  Baby,
  Accessibility,
  // Beliefs
  Cross,
  Wind,
  Church,
  Globe,
  // Giving
  CreditCard,
  Building2,
  HandHeart,
  HeartHandshake,
  // UI / utility
  MapPin,
  Clock,
  Lock,
  CheckCircle,
  Play,
  Map,
  ClipboardList,
  Check,
  Image,
  Radio,
  Moon,
  Sunrise,
  Heart,
  Quote,
  Link,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Pencil,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

/**
 * Renders a Lucide icon by string name.
 * Falls back to a neutral dash if the name isn't found.
 */
export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const Icon = iconRegistry[name];
  if (!Icon) return <span aria-hidden>–</span>;
  return <Icon {...props} />;
};
