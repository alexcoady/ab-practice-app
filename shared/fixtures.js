const handVariations = [{
  title: 'Left hand'
}, {
  title: 'Right hand'
}];

const minorScaleVariations = [{
  title: 'Melodic',
}, {
  title: 'Harmonic',
}, {
  title: 'Natural',
}];

const minorScaleTopLevelVariations = [{
  title: 'Left hand',
  variations: minorScaleVariations,
}, {
  title: 'Right hand',
  variations: minorScaleVariations,
}];

const GRADE_1 = {
  grade: '1',
  content: [{
    title: 'Scales',
    notes: '2 octaves',
    items: [{
      title: 'C major',
      variations: handVariations,
    }, {
      title: 'G major',
      variations: handVariations,
    }, {
      title: 'D major',
      variations: handVariations,
    }, {
      title: 'F major',
      variations: handVariations,
    }, {
      title: 'A minor',
      variations: minorScaleTopLevelVariations,
    }, {
      title: 'D minor',
      variations: minorScaleTopLevelVariations,
    }],
  }, {
    title: 'Contrary-motion scales',
    notes: '1 octave',
    items: [{
      title: 'C major'
    }],
  }, {
    title: 'Broken chords',
    items: [{
      title: 'C major',
      variations: handVariations,
    }, {
      title: 'G major',
      variations: handVariations,
    }, {
      title: 'F major',
      variations: handVariations,
    }, {
      title: 'A minor',
      variations: handVariations,
    }, {
      title: 'D minor',
      variations: handVariations,
    }],
  }, {
    title: 'Pieces',
    items: [{
      title: 'A',
    }, {
      title: 'B',
    }, {
      title: 'C',
    }]
  }],
};

export default [
  GRADE_1, {
    ...GRADE_1,
    grade: '2'
  }, {
    ...GRADE_1,
    grade: '3',
  },
];
