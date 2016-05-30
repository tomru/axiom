import React, { Component } from 'react';
import { Card, CardContent } from 'bw-axiom/react';
import { Heading, Paragraph, Strong } from 'bw-axiom/react';

class Character extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>curious, questioning and challenging of everything</Strong></Heading>
            <Paragraph>This approach to knowledge applies to novel trends as well as conventional wisdom. Everything becomes an invitation to absorb new information.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>transparent and honest to the core</Strong></Heading>
            <Paragraph>There’s nothing we’re trying to hide and we’re not afraid to be frank about the truth.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>knowledgeable and reliable</Strong></Heading>
            <Paragraph>It makes us inherently authoritative and it means that we know what we are talking about. We’re comfortable speaking about the ideas behind copy we publish. We know why we wrote them and are confident in our answers when confronted with alternatives.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>witty, but not hilarious</Strong></Heading>
            <Paragraph>We seek knowing smiles, not raucous laughter.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>positive, but not excitable</Strong></Heading>
            <Paragraph>Our audience feels upbeat, not fanatical.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We are <Strong>conversational, but not colloquial</Strong></Heading>
            <Paragraph>Copy is delivered like speech, but without slang.</Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Heading level={ 4 }>We <Strong>don’t rock, we’re not awesome and we’re certainly not gurus</Strong></Heading>
            <Paragraph>There’s a deep level of sophistication in what we write and it commands a level of respect and intrigue that becomes lost when the language doesn’t mirror that ethos.</Paragraph>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default {
  id: 'character',
  path: 'character',
  group: 'writing-and-voice',
  Example: Character,
};
