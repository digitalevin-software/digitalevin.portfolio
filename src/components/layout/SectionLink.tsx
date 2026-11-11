import { Link, type LinkProps } from 'react-router'

type SectionLinkProps = Omit<LinkProps, 'to'> & {
  /** Ana sayfadaki bölüm, örn. "#projeler". */
  section: string
}

/** Ana sayfadaki bir bölüme bağlantı; proje sayfasından tıklanınca önce ana sayfaya döner. */
export function SectionLink({ section, ...props }: SectionLinkProps) {
  return <Link to={{ pathname: '/', hash: section }} {...props} />
}
