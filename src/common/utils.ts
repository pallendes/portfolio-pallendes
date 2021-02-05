export function setForDevice<T>(props: Array<T>, size: string): T {
  switch (size) {
    case 'small':
      return props[0];
    case 'medium':
      return props[1];
    case 'large':
      return props.length > 2 ? props[2] : props[1];
  }

  return props[0];
}
