### Roster Details<br />
Team Name: Final Form<br />
Roster: Beast, CAJUN, CoolComs, TyRa, YNGHunter<br />
Global Rank: [264](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  499.7<br />
<br />
Final Rank Value (499.7) = Starting Rank Value (498.4) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.204[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.4
- 400 + ( ( 0.051 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 498.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1085 | 2024-12-03 | OutGoing eSports        | L   | 0.616      | -            | -                | -                | -         |    -7.11 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            7 |     1105 | 2024-12-02 | Ascend                  | W   | 0.609      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.87 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            6 |     1976 | 2024-10-12 | FLUFFY AIMERS           | L   | 0.268      | -            | -                | -                | -         |    -1.42 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            5 |     2328 | 2024-10-01 | NRG                     | L   | 0.194      | -            | -                | -                | -         |    -0.35 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            4 |     2589 | 2024-09-24 | Jahsdnmasjdm v2         | W   | 0.148      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.21 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            3 |     2663 | 2024-09-22 | Familia Maquininha      | L   | 0.135      | -            | -                | -                | -         |    -1.25 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            2 |     2706 | 2024-09-20 | Penance (American Team) | W   | 0.121      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.39 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            1 |     2868 | 2024-09-14 | Lore Gaming             | W   | 0.082      | 0.371        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     0.94 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41.16)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.274 | $150.00        | $41.16          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
