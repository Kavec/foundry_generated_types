/**
 * A hook event that fires whenever this Application is first rendered to add buttons to its header.
 */
export type ApplicationHeaderButton = {
    label: string;
    class: string;
    icon: string;
    [tooltip]: string;
    onclick: Function | null;
};
