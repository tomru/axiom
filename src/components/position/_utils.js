export function positionToPlacement(position, offset) {
  return offset === 'middle' ? position : `${position}-${offset}`;
}

export function placementToPosition(placement) {
  const [position, offset] = placement.split('-');
  return [position, offset || 'middle'];
}

export function getPlacementFlipOrder(placement) {
  const [primary] = placementToPosition(placement);
  const [secondary, tertiary, quaternary] = {
    top: ['right', 'bottom', 'left'],
    right: ['bottom', 'left', 'top'],
    bottom: ['left', 'top', 'right'],
    left: ['top', 'right', 'bottom'],
  }[primary];

  return [ primary, secondary, tertiary, quaternary ];
}
