### Roster Details<br />
Team Name: Timbermen<br />
Roster: dare, dea, nosraC, shane, snav<br />
Global Rank: [96](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [21]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  718.1<br />
<br />
Final Rank Value (718.1) = Starting Rank Value (702.7) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.7
- 400 + ( ( 0.139 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 702.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      837 | 2024-12-15 | NRG              | W   | 0.260      | 0.303        | 0.029 (0.002)    | 0.413 (0.033)    | 0 (0.000) |     6.00 | dare, dea, nosraC, shane, snav |
|            4 |      840 | 2024-12-15 | Nouns Esports    | W   | 0.260      | 0.303        | 0.004 (0.000)    | 0.308 (0.024)    | 0 (0.000) |     4.66 | dare, dea, nosraC, shane, snav |
|            3 |      859 | 2024-12-14 | BOSS             | W   | 0.254      | 0.303        | 0.004 (0.000)    | 0.304 (0.023)    | 0 (0.000) |     4.77 | dare, dea, nosraC, shane, snav |
|            2 |     1252 | 2024-11-24 | NRG              | L   | 0.119      | -            | -                | -                | -         |    -1.01 | dare, dea, nosraC, shane, snav |
|            1 |     1272 | 2024-11-23 | Party Astronauts | W   | 0.113      | 0.303        | 0.000 (0.000)    | 0.329 (0.011)    | 0 (0.000) |     0.97 | dare, dea, nosraC, shane, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,041.67)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.260 | $4,000.00      | $1,041.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
