import React from 'react';
import styled from '@emotion/styled';
import { Arrow } from '../images/Arrow.jsx';

const AccordionItem = ({ className, title, content, onToggle, active }) => (
  <div className={active ? `${className} active` : `${className} inactive`}>
    <div className='experience-block' onClick={onToggle}>
      <div className='experience-tab'>
        <div className='experience-title'>{title}</div>

        <div className={active ? 'arrow open' : 'arrow closed'}>
          <Arrow />
        </div>
      </div>
      {active && <div className='experience-content'>{content}</div>}
    </div>
  </div>
);

const styledAccordionItem = styled(AccordionItem)`
  border-left: 10px solid #A85329;
  transition: opacity ease 300ms;
  &.inactive {
    opacity: 0.5;
    transition: opacity ease 300ms;
  }

  .experience-block {
    background: rgba(168, 83, 41, 0.2);
    padding: 20px;
    text-align: left;
  }

  .experience-title, .experience-content p, li {
    color: var(--coco-cosmos);
    font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  }

  .experience-tab {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: space-between;
    .experience-title {
      font-size: 1.125rem;
      font-weight: 800;
    }
    .arrow {
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3px;
      transition: ease all 300ms;
      width: 15px;
      &.open {
        transform: rotate(180deg);
        transition: ease all 300ms;
        .cls-1 {
          stroke: #511a1a;
        }
      }
      &.closed {
        .cls-1 {
          stroke: var(--rusty-venture);
        }
      }
    }
  }

  .experience-content {
    .company, .position {
      font-weight: 800;
    }
    .company {
      font-size: 1rem;
      font-style: italic;
      margin: 15px 0 5px;
    }
    .position {
      margin-top: 0;
    }
    ul {
      padding-left: 30px;
      li {
        margin-bottom: 10px;
      }
    }
  }
`

export default styledAccordionItem;