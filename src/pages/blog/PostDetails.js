import React from 'react';
import styled from 'styled-components';
import { PostSection, PostContent } from '../../ui/PostItem'
import { secondary } from '../../layout/colors'
import Code from '../../ui/Code';

const PostDetailsSubtitle = styled.h2`
  color: ${secondary};
  text-align: justify;
  width: 100%;
  margin-bottom: 24px;
`;

const PostDetails = () => (
  <PostSection className="nes-container with-title">
    <h3 className="title">
      This is the title. I don't really know how big it can be.
      Pretty big I guess
      </h3>
    <PostContent>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Delegadis gente finis, bibendum egestas augue arcu ut est. Paisis, filhis, espiritis santis.
      </p>
      <p>
       Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Delegadis gente finis, bibendum egestas augue arcu ut est. Paisis, filhis, espiritis santis. 
      </p>
      <PostDetailsSubtitle>
        Yeh this is the subtitle that might happen to explain something else
      </PostDetailsSubtitle>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Delegadis gente finis, bibendum egestas augue arcu ut est. Paisis, filhis, espiritis santis.
      </p>
      <p>Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Delegadis gente finis, bibendum egestas augue arcu ut est. Paisis, filhis, espiritis santis.</p>
      <Code />
    </PostContent>
  </PostSection>
);

export default PostDetails; 