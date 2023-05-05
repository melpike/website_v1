import React from 'react';
import styled from '@emotion/styled';

const Intro = ({ className }) => {
    return (
        <div className={className}>
            <h1>Hi there!</h1>
            <p>I’m Mel—a designer turned <span className="content-semiBold">software&nbsp;engineer</span>—passionate about creating engaging, interactive, and user centered experiences.</p>
        </div>
    )
}

const styledIntro = styled(Intro)`
    p, span {
        font-size: 1.25rem;
    }

    @media screen and (min-width: 1330px) {
        margin: 100px auto;
        text-align: left;

        p, span {
            font-size: 1.875rem;
        }
    }
`

export default styledIntro;