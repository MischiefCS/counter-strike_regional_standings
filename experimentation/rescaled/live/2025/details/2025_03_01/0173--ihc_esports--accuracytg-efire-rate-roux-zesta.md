### Roster Details<br />
Team Name: IHC Esports<br />
Roster: AccuracyTG, efire, rate, ROUX, Zesta<br />
Global Rank: [173](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  661.0<br />
<br />
Final Rank Value (661.0) = Starting Rank Value (651.1) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.1
- 400 + ( ( 0.132 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 651.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1625 | 2024-11-08 | Ex-GR Gaming                  | L   | 0.444      | -            | -                | -                | -         |    -4.89 | AccuracyTG, efire, rate, ROUX, Zesta |
|            4 |     1628 | 2024-11-07 | The Huns Esports              | W   | 0.443      | 0.410        | 0.025 (0.004)    | 0.516 (0.094)    | 0 (0.000) |    12.13 | AccuracyTG, efire, rate, ROUX, Zesta |
|            3 |     1643 | 2024-11-06 | Clutch Gaming                 | W   | 0.437      | 0.410        | 0.000 (0.000)    | 0.056 (0.010)    | 0 (0.000) |     4.74 | AccuracyTG, efire, rate, ROUX, Zesta |
|            2 |     1668 | 2024-11-04 | Ex-GR Gaming                  | L   | 0.424      | -            | -                | -                | -         |    -4.70 | AccuracyTG, efire, rate, ROUX, Zesta |
|            1 |     1669 | 2024-11-04 | NOVA Esports (Mongolian team) | W   | 0.423      | 0.410        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.61 | AccuracyTG, efire, rate, ROUX, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,111.23)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.444 | $2,500.00      | $1,111.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
