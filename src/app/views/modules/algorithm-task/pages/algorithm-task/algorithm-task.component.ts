import { Component, OnInit } from '@angular/core';

import { ReviewerGroup, Anonymizer } from '@models/models';

@Component({
  selector: 'app-algorithm-task',
  templateUrl: './algorithm-task.component.html',
  styleUrls: ['./algorithm-task.component.scss']
})
export class AlgorithmTaskComponent implements OnInit, Anonymizer {

  constructor() { }

  ngOnInit(): void {
    this.ensureAnonymity([{
      id: 'someReviewerGroupId',
      responses: [{
        id: 'someResponseId',
      }],
    }]);
  }

  public ensureAnonymity(groups: ReviewerGroup[]): ReviewerGroup[] {
    let collapsed: ReviewerGroup;

    function constructGroups(reviewerGroup: ReviewerGroup, x: ReviewerGroup[]): ReviewerGroup[] {
      if (reviewerGroup.responses && reviewerGroup.responses.length > 5) {
        return [ ...x, reviewerGroup ];

      } else {
        collapsed = collapsed
          ? {
            ...collapsed,
            responses: [ ...collapsed.responses, ...reviewerGroup.responses ],
          }
          : {
            ...reviewerGroup,
            id: 'Collapsed',
          };

        return x;
      }
    }

    const anonymousReviewerGroups = groups.reduce((x: ReviewerGroup[], reviewerGroup: ReviewerGroup, i: number) => {
      if (i !== groups.length - 1) {
        return constructGroups(reviewerGroup, x);
      } else {
        const restructuredReviewerGroups = constructGroups(reviewerGroup, x);

        if (collapsed) {
          while (restructuredReviewerGroups.length && collapsed.responses.length < 5) {
            const lastGroup = restructuredReviewerGroups.pop();
            if (lastGroup) {
              collapsed = {
                ...collapsed,
                responses: [ ...collapsed.responses, ...lastGroup.responses ],
              }
            }
          }

          if (collapsed.responses.length < 5) {
            throw new Error('Cannot ensure anonymity.');
          } else {
            return [ ...restructuredReviewerGroups, collapsed ];
          }
        } else {
          return restructuredReviewerGroups;
        }
      }
    }, []);

    return anonymousReviewerGroups;
  }

}
