### Roster Details<br />
Team Name: Dark Cloud Esports<br />
Roster: AdrieN, chudy, darchevile, mwlky, Nami<br />
Global Rank: [84](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  640.4<br />
<br />
Final Rank Value (640.4) = Starting Rank Value (654.1) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.1
- 400 + ( ( 0.110 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 654.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      131 | 2025-02-21 | Tricked Esport   | L   | 0.525      | -            | -                | -                | -         |   -10.98 | AdrieN, chudy, darchevile, mwlky, Nami   |
|            9 |      143 | 2025-02-21 | 1win             | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.27 | AdrieN, chudy, darchevile, mwlky, Nami   |
|            8 |      728 | 2025-01-04 | Insilio          | L   | 0.204      | -            | -                | -                | -         |    -4.42 | chudy, darchevile, Enzo, Michat, Nami    |
|            7 |      738 | 2024-12-29 | BRUTE            | W   | 0.163      | 0.417        | 0.000 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     1.56 | chudy, darchevile, Michat, Nami, next1me |
|            6 |      752 | 2024-12-27 | 9INE             | L   | 0.149      | -            | -                | -                | -         |    -1.48 | chudy, darchevile, Enzo, Michat, Nami    |
|            5 |      784 | 2024-12-21 | Astralis Talent  | L   | 0.110      | -            | -                | -                | -         |    -2.35 | Bambosh, chudy2k, darchevile, Enzo, Nami |
|            4 |      788 | 2024-12-20 | Monte            | L   | 0.105      | -            | -                | -                | -         |    -1.25 | Bambosh, chudy2k, darchevile, Enzo, Nami |
|            3 |      796 | 2024-12-20 | ALASKA           | L   | 0.102      | -            | -                | -                | -         |    -0.47 | Bambosh, chudy2k, darchevile, Enzo, Nami |
|            2 |      798 | 2024-12-19 | FLuffy Gangsters | W   | 0.099      | 0.333        | 0.000 (0.000)    | 0.073 (0.002)    | 0 (0.000) |     0.86 | Bambosh, chudy2k, darchevile, Enzo, Nami |
|            1 |      824 | 2024-12-17 | KONO.ECF         | W   | 0.085      | 0.333        | 0.011 (0.000)    | 0.124 (0.003)    | 0 (0.000) |     1.55 | Bambosh, chudy2k, darchevile, Enzo, Nami |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($110.42)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.110 | $1,000.00      | $110.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
