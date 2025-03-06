### Roster Details<br />
Team Name: Galorys Academy<br />
Roster: bacc, insan1ty, Kadzz, prisma, triande<br />
Global Rank: [283](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [92]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  392.4<br />
<br />
Final Rank Value (392.4) = Starting Rank Value (400.0) + Head To Head Adjustments (-7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      803 | 2024-12-19 | Nitro.GG           | L   | 0.719      | -            | -                | -                | -         |    -4.38 | bacc, insan1ty, Kadzz, prisma, triande |
|            4 |      823 | 2024-12-17 | América eSports    | W   | 0.706      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.11 | bacc, insan1ty, Kadzz, prisma, triande |
|            3 |      850 | 2024-12-15 | Patins da Ferrari  | L   | 0.692      | -            | -                | -                | -         |    -7.19 | bacc, insan1ty, Kadzz, prisma, triande |
|            2 |      891 | 2024-12-13 | UNO MILLE          | L   | 0.681      | -            | -                | -                | -         |    -3.32 | bacc, insan1ty, Kadzz, prisma, triande |
|            1 |     1185 | 2024-11-29 | RED Canids Academy | L   | 0.587      | -            | -                | -                | -         |    -3.84 | bacc, insan1ty, Kadzz, prisma, triande |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
