export const Vpassword = (p: string): boolean => {
  return true;
};

export const VconfirmPassword = (p: string, c: string): boolean => {
  return p === c;
};

export const Vname = (n : string): boolean => {
    return n.length > 0;
}