### Roster Details<br />
Team Name: Team Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [195](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  403.7<br />
<br />
Final Rank Value (403.7) = Starting Rank Value (405.0) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.009[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 405.0
- 400 + ( ( 0.002 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 405.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1455 | 2024-11-15 | Metizport                   | L   | 0.057      | -            | -                | -                | -         |    -0.17 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            4 |     1462 | 2024-11-15 | Mindfreak (Australian team) | L   | 0.056      | -            | -                | -                | -         |    -0.89 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            3 |     1475 | 2024-11-14 | Team Norway                 | L   | 0.052      | -            | -                | -                | -         |    -0.79 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            2 |     1515 | 2024-11-13 | Los kogutos                 | L   | 0.044      | -            | -                | -                | -         |    -0.35 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            1 |     1518 | 2024-11-13 | Team Turkey                 | W   | 0.044      | 0.617        | 0.000 (0.000)    | 0.011 (0.000)    | 1 (0.044) |     0.90 | Gabie, J0LZ, Melio, Pluto, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
