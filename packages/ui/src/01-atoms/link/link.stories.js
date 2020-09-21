import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Link from './index';

export default {
    title: '01-Atoms/Links',
};

export const Standard = () => renderToStaticMarkup(<Link>Das ist ein inline Link</Link>);

export const FooterLink = ({ label = 'Footer Link' }) => renderToStaticMarkup(<Link classes={['a-link--footer']}>{label}</Link>);

// export const IconLink = () => renderToStaticMarkup(
//     <Link classes={['a-link--icon']}>
//       <Icon name='home' />
//     </Link>
//   );

// export const WithLabelIcon = () => renderToStaticMarkup(
//     <Link classes={['a-link--lbl-icon']}>
//       Link mit einem Icon
//       <Icon name='arrow-right' />
//     </Link>
//   );

// export const LanguageLink = () => renderToStaticMarkup(
//     <Link classes={['a-link--lang']}>
//       <abbr title='Deutsch'>de</abbr>
//     </Link>
//   );

// export const LinkListLink = () => renderToStaticMarkup(
//     <Link classes={['a-link--lbl-icon a-link--list']}>
//       Link innerhalb Linkliste
//       <Icon name='arrow-right' />
//     </Link>
//   );

// export const LinkListLinkInverted = () => renderToStaticMarkup(
//     <Link classes={['a-link--lbl-icon a-link--list a-link--inverted']}>
//       Link innerhalb Linkliste Invers
//       <Icon name='arrow-right' />
//     </Link>
//   );

// export const NavLink = () => renderToStaticMarkup(
//     <Link classes={['a-link--nav']}>Kompetenzen</Link>
//   );

// export const NavLinkActive = () => renderToStaticMarkup(
//     <Link classes={['a-link--nav a-link--active']}>Kompetenzen</Link>
//   );

// export const PaginationDot = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination']}>
//       <span>…</span>
//     </Link>
//   );

// export const PaginationLink = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination']}>
//       <span>1</span>
//     </Link>
//   );

// export const PaginationLinkActive = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination a-link--active']}>
//       <span>1</span>
//     </Link>
//   );

// export const PaginationLinkDisabled = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination a-link--disabled']}>
//       <span>1</span>
//     </Link>
//   );

// export const PaginationNext = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination a-link--pagination-next']}>
//       <span>
//         <Icon name='arrow-right' />
//       </span>
//     </Link>
//   );

// export const PaginationPrev = () => renderToStaticMarkup(
//     <Link classes={['a-link--pagination a-link--pagination-prev']}>
//       <span>
//         <Icon name='arrow-left' />
//       </span>
//     </Link>
//   );
